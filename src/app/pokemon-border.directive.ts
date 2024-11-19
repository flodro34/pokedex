import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]',
  standalone: true
})
export class PokemonBorderDirective {

  pokemonType = input.required<string>();
  private initialColor: string;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const color = this.getBorderColor();
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

  private getBorderColor() {
    switch (this.pokemonType()) {
      case 'Feu': //rouge
        return '#EF5350';
      case 'Eau': //eau
        return '#42A5F5';
      case 'Plante': //vert
        return '#66BB6A';
      case 'Insecte': //marron
        return '#8d6e63';
      case 'Vol':
        return '#90CAF9';
      case 'Poison': //violet
        return '#b388ff';
      case 'Fée': //rose
        return '#f8bbd0';
      case 'Electrik': //jaune
        return '#f4ff81';
      default:
        return '#303030';
    }
  }
}
