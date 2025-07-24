import { defineComponent, ref } from "vue"
import { Left, type LeftValue } from "~/components/left"
import { Right, type RightValue } from "~/components/right"
import styles from "./example-data-transfer.module.css"

export type PageValue = LeftValue & RightValue

export default defineComponent({
  setup() {
    const value = ref<PageValue>({
      leftValue: "текст",
      leftChildValue: "текст текст",
      rightValue: 1,
      rightHeadValue: 3,
      rightBottomValue: 4,
      bottomChildValue: 5,
    })

    return () => (
      <div class={styles.box}>
        <Left value={value.value} />
        Test
        <Right value={value.value} />
      </div>
    )
  },
})
