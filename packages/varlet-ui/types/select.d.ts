import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export type SelectValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export type SelectTextAlign = 'left' | 'right' | 'center'

export interface SelectProps extends BasicAttributes {
  modelValue?: any
  placeholder?: string
  multiple?: boolean
  offsetY?: number | string
  chip?: boolean
  line?: boolean
  hint?: boolean
  textColor?: string
  focusColor?: string
  blurColor?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  separator?: string
  textAlign?: SelectTextAlign
  validateTrigger?: Array<SelectValidateTrigger>
  rules?: Array<(v: any) => any>
  onFocus?: (e: Event) => void
  onBlur?: (e: Event) => void
  onClick?: (e: Event) => void
  onClear?: (value: any) => void
  onClose?: (value: any) => void
  onChange?: (value: any) => void
  'onUpdate:modelValue'?: (value: any) => void
}

export interface SelectArrowIconData {
  focus: boolean
}

export class Select extends VarComponent {
  $props: SelectProps

  $slots: {
    'prepend-icon'(): VNode[]
    'append-icon'(): VNode[]
    'arrow-icon'(data: SelectArrowIconData): VNode[]
  }

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _SelectComponent extends Select {}
