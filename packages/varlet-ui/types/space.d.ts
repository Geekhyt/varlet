import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export type SpaceAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit'

export type SpaceDirection = 'row' | 'column'

export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

export type SpaceInternalSize = 'mini' | 'small' | 'normal' | 'large'

export type SpaceSize = SpaceInternalSize | number | string | [number | string, number | string]

export interface SpaceProps extends BasicAttributes {
  align?: SpaceAlign
  size?: SpaceSize
  warp?: boolean
  direction?: SpaceDirection
  justify?: SpaceJustify
  inline?: boolean
}

export class Space extends VarComponent {
  $props: SpaceProps

  $slots: {
    default(): VNode[]
  }
}

export class _SpaceComponent extends Space {}
