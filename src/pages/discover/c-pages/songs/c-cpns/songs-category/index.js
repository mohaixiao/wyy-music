import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  changeCurrentCategoryAction,
  getSongList
} from "../../store/actionCreators";

import {
  CategoryWrapper
} from "./style";

const SongsCategory = memo((props) => {
  // redux 分类
  const { category } = useSelector(state => ({
    category: state.getIn(["songs", "category"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // 选择不同菜单
  function selectCategory(name) {
    // 关闭菜单栏
    props.changeShowCategory()
    // 改变当前标题
    dispatch(changeCurrentCategoryAction(name));
    // 请求当前分类最前面0的数据SongList
    dispatch(getSongList(0));
  }

  

  return (
    <CategoryWrapper >
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={e => selectCategory("全部")}>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})

export default SongsCategory