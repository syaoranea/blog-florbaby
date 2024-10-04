import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// chart
import { NgApexchartsModule } from "ng-apexcharts";

// Page Route
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Count To
import { CountUpModule } from 'ngx-countup';

// Bootstrap Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Component
import { IndexComponent } from './index/index.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TagsComponent } from './tags/tags.component';
import { TablesModule } from '../tables/tables.module';
import { TableRoutingModule } from '../tables/table-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgPipesModule } from 'ngx-pipes';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';




@NgModule({
  declarations: [
    IndexComponent,
    EcommerceComponent,
    PostagensComponent,
    CategoriasComponent,
    GaleriaComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    NgApexchartsModule,
    BsDropdownModule.forRoot(),
    CountUpModule,
    SimplebarAngularModule,
    TooltipModule.forRoot(),
    ProgressbarModule.forRoot(),
    SlickCarouselModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TablesModule,
    TableRoutingModule,
    ModalModule,
    NgPipesModule,
    EditorModule,

  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardsModule { }
