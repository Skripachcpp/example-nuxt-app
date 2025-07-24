import { defineComponent } from "vue"

import styles from "./index.module.css"
import { prop } from "~/helpers/prop"

export type BottomChildValue = {
  bottomChildValue: number
}

export const BottomChild = defineComponent({
  props: {
    value: prop<BottomChildValue>().optional(),
  },
  setup(props) {
    return () => (
      <div class={styles.box}>
        BottomChild
        <div style={{ backgroundColor: "#FF7F50" }}>
          {" "}
          {props.value?.bottomChildValue}
        </div>
      </div>
    )
  },
})
