import { defineComponent } from "vue";

import styles from "./index.module.css";
import { RightHead, type RightHeadValue } from "../right-head";
import { RightBottom, type RightBottomValue } from "../right-bottom";
import { prop } from "~/helpers/prop";

export type RightValue = RightHeadValue &
  RightBottomValue & {
    rightValue: number;
  };

export const Right = defineComponent({
  props: {
    value: prop<RightValue>().optional(),
  },
  setup(props) {
    return () => (
      <div class={styles.box}>
        Right
        <div style={{ backgroundColor: "#3CB371" }}> {props.value?.rightValue}</div>
        <RightHead value={props.value} />
        <RightBottom value={props.value} />
      </div>
    );
  },
});
