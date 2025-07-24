import { defineComponent } from "vue"
import { Calculator } from "~/components/calculator"

export default defineComponent({
  setup() {
    return () => <Calculator />
  },
})
