import { defineComponent } from "vue";
import styles from "./index.module.css";
import { prop } from "~/helpers/prop";

export type RightHeadValue = {
  rightHeadValue: number;
};

export const RightHead = defineComponent({
  props: {
    value: prop<RightHeadValue>().optional(),
  },
  setup(props) {
    return () => (
      <div class={styles.box}>
        RightHead
        <div style={{ backgroundColor: "#008080" }}> {props.value?.rightHeadValue}</div>
      </div>
    );
  }
});
