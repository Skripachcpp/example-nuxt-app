import { defineComponent } from "vue"
import { CalculatorInput } from "./calculator-input"
import { CalculatorButton, CalculatorButtonGeneric } from "./calculator-button"
import styles from "./index.module.css"
import { prop } from "~/helpers/prop"

// в калькуляторе не планируется полной реализации
// нельзя ввести дробные чисела
// нельзя ввести отрицательные чисела
// нет кнопки удалить последный символ
// все операции выполняются последовательно
// не забываем что это пример моего кода а не калькулятор

const CalculatorButtonNumber = CalculatorButtonGeneric<number>()
const CalculatorButtonOperator = CalculatorButtonGeneric<Operator>()

enum Operator {
  Plus = "+",
  Minus = "-",
  Divide = "/",
  Multiply = "*",
}

type Expression = {
  number: number
  operator?: Operator
}

export const Calculator = defineComponent({
  setup() {
    const expressions = ref<Expression[]>([
      // { number: 2, operator: Operator.Plus },
      // { number: 3, operator: Operator.Plus },
      // { number: 2, operator: Operator.Plus },
      // { number: 2, operator: Operator.Minus },
      // { number: 3, operator: Operator.Plus },
      // { number: 2, operator: Operator.Minus },
      // { number: 3 },
    ])

    const expressionsText = computed<string>(() => {
      return expressions.value
        .map((it) => it.number.toString() + (it.operator?.toString() ?? ""))
        .join("")
    })

    const clickToNumber = (value: number) => {
      const expressionLast = expressions.value.at(-1)

      if (expressionLast == null || expressionLast.operator != null) {
        expressions.value.push({ number: value })
      } else {
        // TODO: нет реализации для дробных чисел
        expressionLast.number = parseInt(
          expressionLast.number.toString() + value.toString()
        )
      }
    }

    const clickToCalc = () => {
      // можно было использовать reduce но с ним тут не удобно
      // вариант с forEach получился более очевидный и читаемый
      if (expressions.value[0] == null) return

      let sum = expressions.value[0].number
      let currentOperator = expressions.value[0]?.operator

      expressions.value.forEach((it, index) => {
        if (index == 0) return

        switch (currentOperator) {
          case Operator.Plus:
            sum = sum + it.number
            break
          case Operator.Minus:
            sum = sum - it.number
            break
          case Operator.Multiply:
            sum = sum * it.number
            break
          case Operator.Divide:
            sum = sum / it.number
            break
        }

        currentOperator = it.operator
      })

      expressions.value = [{ number: sum }]
    }

    const clickToOperator = (operator: Operator) => {
      // из за 2+2*2 приходится считать сразу
      if (expressions.value.length >= 2) clickToCalc()

      const expressionLast = expressions.value.at(-1)

      // TODO: нет реализации для отрицательных чисел
      if (expressionLast != null) {
        expressionLast.operator = operator
      }
    }

    const clickToClear = () => {
      expressions.value = []
    }

    return () => (
      <div class={styles.calculator}>
        <div>
          <CalculatorInput text={expressionsText.value} />
        </div>

        <div class={styles.topRow}>
          <CalculatorButton
            class={styles.topRowLeftButton}
            value={"C"}
            whenClick={() => clickToClear()}
          />
          <CalculatorButtonOperator
            value={Operator.Plus}
            whenClick={clickToOperator}
          />
          <CalculatorButtonOperator
            value={Operator.Minus}
            whenClick={clickToOperator}
          />
          <CalculatorButtonOperator
            value={Operator.Multiply}
            whenClick={clickToOperator}
          />
          <CalculatorButtonOperator
            value={Operator.Divide}
            whenClick={clickToOperator}
          />
        </div>

        <div class={styles.leftRight}>
          <div class={styles.left}>
            <div class={styles.leftRow}>
              <CalculatorButtonNumber value={1} whenClick={clickToNumber} />

              <CalculatorButtonNumber value={2} whenClick={clickToNumber} />
              <CalculatorButtonNumber value={3} whenClick={clickToNumber} />
            </div>

            <div class={styles.leftRow}>
              <CalculatorButtonNumber value={4} whenClick={clickToNumber} />
              <CalculatorButtonNumber value={5} whenClick={clickToNumber} />
              <CalculatorButtonNumber value={6} whenClick={clickToNumber} />
            </div>

            <div class={styles.leftRow}>
              <CalculatorButtonNumber value={7} whenClick={clickToNumber} />
              <CalculatorButtonNumber value={8} whenClick={clickToNumber} />
              <CalculatorButtonNumber value={9} whenClick={clickToNumber} />
            </div>

            <div class={styles.leftBottomRow}>
              <CalculatorButtonNumber value={0} whenClick={clickToNumber} />
            </div>
          </div>

          <div class={styles.right}>
            <CalculatorButton value={"="} whenClick={() => clickToCalc()} />
          </div>
        </div>
      </div>
    )
  },
})
