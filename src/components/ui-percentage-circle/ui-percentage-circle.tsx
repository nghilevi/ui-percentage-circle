import { Component, Prop, h, Element} from '@stencil/core';

@Component({
  tag: 'ui-percentage-circle',
  styleUrl: 'ui-percentage-circle.scss',
  shadow: true,
})
export class UiPercentageCircle {
  
  isEmptySlot: boolean = false;

  @Prop() pc;
  @Element() el: HTMLElement;
  
  componentWillRender(){
    this.isEmptySlot = this.el.children.length === 0;
    console.log('componentWillRender, this.hasSlot: ',this.isEmptySlot)
  }

  render() {
    return <div class={ 'pie p'  +this.pc + ' '+(this.isEmptySlot ? 'empty-slot' : 'filled-slot')}>
       <slot/>
    </div>
  }

}
