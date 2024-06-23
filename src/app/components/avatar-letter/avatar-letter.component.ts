import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-letter',
  standalone: true,
  templateUrl: './avatar-letter.component.html',
  styleUrl: './avatar-letter.component.css',
})
export class AvatarLetterComponent {
  @Input()
  name: string;

  getInitial() {
    const initial = this.name.charAt(0);
    return initial.toUpperCase();
  }

  ngOnInit() {}
}
