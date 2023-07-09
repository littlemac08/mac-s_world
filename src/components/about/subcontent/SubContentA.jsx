import React from 'react';
import classes from './SubContentA.module.scss'

const SubContentA = () => {
  return (
    <div>
      <div className={classes.sub_content_wrap}>
        <div className={classes.sub_content_top}>
          <p className={classes.sub_content_top_title}>FINAL GOAL</p>
        </div>
        <div className={classes.sub_content_bottom}>
          <div className={classes.sub_content_bottom_left}>
            <div className={classes.sub_content_bottom_left_step}>
              <p className={classes.sub_content_bottom_left_title}>
                STEP 1 : <span>FRONT_END DEVELOPER</span>
              </p>
              <span className={classes.sub_content_bottom_left_des}>
                LEARNED PUBLISHING, JAVASCRIPT, REACT, VUE
              </span>
            </div>
            <div className={classes.sub_content_bottom_left_step}>
              <p className={classes.sub_content_bottom_left_title}>
                STEP 2 : <span>LEARNED BACK_END</span>
              </p>
              <span className={classes.sub_content_bottom_left_des}>
                PREPARING...
              </span>
            </div>
            <div className={classes.sub_content_bottom_left_step}>
              <p className={classes.sub_content_bottom_left_title}>
                STEP 3 : <span>FULLSTACK DEVELOPER</span>
              </p>
              <span className={classes.sub_content_bottom_left_des}>
                  PREPARING...
              </span>
            </div>
          </div>
          <div className={classes.sub_content_bottom_right}>
            <div className={classes.sub_content_bottom_graph}>
              <div className={classes.sub_content_bottom_graph_level}>
                <div className={classes.sub_content_bottom_graph_level_bar}>
                  <div>LV.10</div>
                  <div>LV.9</div>
                  <div>LV.8</div>
                  <div>LV.7</div>
                  <div>LV.6</div>
                  <div>LV.5</div>
                  <div>LV.4</div>
                  <div>LV.3</div>
                  <div>LV.2</div>
                  <div>LV.1</div>
                </div>
                <div className={classes.sub_content_bottom_graph_level_title}>
                  level
                </div>
              </div>
              <div className={classes.sub_contnet_bottom_graph_skill}>
                <div className={classes._sub_content_bottom_graph_html}>
                  <div className={classes.sub_content_bottom_graph_bar}>
                    <div>LV.9</div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                  </div>
                  <div className={classes.sub_content_bottom_graph_title}>
                    HTML
                  </div>
                </div>
                <div className={classes._sub_content_bottom_graph_css}>
                  <div className={classes.sub_content_bottom_graph_bar}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>LV.6</div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                  </div>
                  <div className={classes.sub_content_bottom_graph_title}>
                    CSS
                  </div>
                </div>
                <div className={classes._sub_content_bottom_graph_java}>
                  <div className={classes.sub_content_bottom_graph_bar}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>LV.5</div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                  </div>
                  <div className={classes.sub_content_bottom_graph_title}>
                    JAVASCRIPT
                  </div>
                </div>
                <div className={classes._sub_content_bottom_graph_react}>
                  <div className={classes.sub_content_bottom_graph_bar}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>LV.4</div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                  </div>
                  <div className={classes.sub_content_bottom_graph_title}>
                    REACT
                  </div>
                </div>
                <div className={classes._sub_content_bottom_graph_vue}>
                  <div className={classes.sub_content_bottom_graph_bar}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>LV.2</div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                    <div className={classes.sub_content_bottom_graph_select}></div>
                  </div>
                  <div className={classes.sub_content_bottom_graph_title}>
                    VUE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubContentA