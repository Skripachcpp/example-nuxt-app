import { defineComponent } from "vue"

import styles from "./index.module.css"
import { BottomChild, type BottomChildValue } from "~/components/bottom-child"
import { prop } from "~/helpers/prop"

export type RightBottomValue = BottomChildValue & {
  rightBottomValue: number
}

export const RightBottom = defineComponent({
  props: {
    value: prop<RightBottomValue>().optional(),
  },
  setup(props) {
    return () => (
      <div class={styles.box}>
        RightBottom
        <div style={{ backgroundColor: "#326360" }}>
          {" "}
          {props.value?.rightBottomValue}
        </div>
        <BottomChild value={props.value} />
      </div>
    )
  },
})
