import { Component, inject, OnInit } from '@angular/core';
import { PageHeader } from '../../../../shared/components/page-header/page-header';
import { SizeService } from '../../services/size.service';
import { SizeStore } from '../../state/size.store';

@Component({
  selector: 'app-size-list',
  imports: [PageHeader],
  templateUrl: './size-list.html',
  styleUrl: './size-list.scss',
})
export class SizeList implements OnInit {
  private readonly sizeService = inject(SizeService);

  readonly sizeStore = inject(SizeStore);

  ngOnInit(): void {
    const sizes = this.sizeService.getAll();

    this.sizeStore.setSizes(sizes);
  }
}
