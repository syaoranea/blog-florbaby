
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SobreComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: true,
    autoplay: {
      delay: 500,
    },

  };


  slides = [
    {cliente: 'Lais', imageSrc: 'assets/imgs/page/home/avatar-review2.png', caption: 'avatar', coment: 'Amei, o produto super confortável. O material superou minhas expectativas..' },
    {cliente: 'Fernanda L', imageSrc: 'assets/imgs/page/home/avatar-review3.png', caption: 'avatar', coment: 'Ótimo já é a segunda vez que faço a compra adorei.'  },
    {cliente: 'Pamela M', imageSrc: 'assets/imgs/page/homepage2/avatar-review.png', caption: 'avatar', coment: 'Produto muito bom material de boa qualidade,serviu perfeitamente.'  },
    {cliente: 'Marcia S', imageSrc: 'https://via.placeholder.com/900x500?text=Second', caption: 'avatar', coment: 'Produto de boa qualidade ,e o tamanho ,vem ajustável. Acredito que vá servir para meu bebê ,por um bom tempo. '  },
    {cliente: 'Estevia R', imageSrc: 'https://via.placeholder.com/900x500?text=Third', caption: 'avatar', coment: 'Bom,gostei bonito e me ajudou muito a economizar.'  },
    {cliente: 'Andreia L', imageSrc: 'https://via.placeholder.com/900x500?text=Third', caption: 'avatar', coment: 'Amei. Ainda não usei mas sei que é de excelente qualidade pois meus outros filhos utilizam é dessa vez estarei usando novamente..'  }
  ];
}
