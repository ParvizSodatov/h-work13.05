import './App.css'
import logo from '@/assets/logo.png'
import domen from '@/assets/domen.png'
import kamazo from '@/assets/kamazo.png'
import stroitelo1 from '@/assets/2stroitel.png'
import stroitelo2 from '@/assets/2bacha.png'
import stroiteloinav from '@/assets/stroiteloinav.png'
import qirowa from '@/assets/qirowa.png'
import apple from '@/assets/apple.png'
import gr75 from '@/assets/Group75.png'
import kompany from '@/assets/section6.png'

import pashak from '@/assets/pashak.png'
import { Button1 } from './component/button/button'
import { Article1 } from './component/article1/article1'
import {ChartNoAxesCombined ,Car,Club,Trash,Heater,Zap,BatteryFull,Plug,TextCursor,Omega,LassoSelect,TruckElectric } from 'lucide-react';
import { Section4 } from './component/button/section4/section4'

export default function App(){
  return <>
  <nav>
    <img src={logo} alt="" />
<div className='ulbuton'>

  <ul>
      <li style={{color:'#036FC7'}}>Главная</li>
      <li>О нас</li>
      <li>Продукция</li>
      <li className='none'>Процесс</li>
      <li className='none'>Надёжность</li>
      <li className='none'>Клиенты</li>
      <li className='none'>Связаться с нами</li>
    </ul>
     <Button1/>
</div>
    
  </nav>
<section className='section_1'>
  <h1>Умная доставка материалов для сложных строительных площадок</h1>
  <div className='diblbutton'>
    <Button1/>
  <button className='Подробнее'>Подробнее</button>

  </div>
  <img className='domen' src={domen} alt="" />
  <img className='kamazo' src={kamazo} alt="" />
</section>


<section className='section_2'>

<Article1>
<ChartNoAxesCombined style={{backgroundColor:'yellow'}} />
<h1>Повышение эффективности</h1>
  <p>Эффективные проекты стоят дешевле 
и завершаются в срок.</p>
</Article1>
<Article1>
<ChartNoAxesCombined style={{backgroundColor:'yellow'}} />
<h1>Снижение потерь</h1>
  <p>Тщательно отслеживайте движение стройматериалов, чтобы избежать краж и повреждений.</p>
</Article1>


<Article1>
<ChartNoAxesCombined style={{backgroundColor:'yellow'}} />
<h1>Повышение безопасности</h1>
  <p>Обеспечьте здоровье и благополучие людей, работающих на вашей площадке..</p>
</Article1>
</section>
 
 <section className='section_3'>
<h1>Строительство - это хаос</h1>
<p>Хаос может быть удивительной творческой силой, воздвигающая новые здания из пыли.
Хаос вызывает несчастные случаи, задержки и потери. Он вводит проекты в стресс и разочарование.
Это означает, что вы действительно не контролируете ситуацию.</p>

<img src={stroitelo1} alt="" />
<h1>Пора навести порядок на вашей стройплощадке и взять под контроль свой проект</h1>

 </section>

 <Section4>
<aside>
  
  
  <h1>Мы заботимся о доставке на стройплощадку и о людях, которые на них рассчитывают</h1>

<p>Мы знаем всё о гордости от сияющего нового здания. Нам также известно всё о разочаровании от попыток завершить проект в срок и в рамках бюджета.</p>
<p>Мы здесь, чтобы помочь.</p>
</aside>
<img src={stroitelo2} alt="" />

 </Section4>

 <img className='kompany' src={kompany} alt="" />

  <section className='section_3'>
<h1>Строительство - это хаос</h1>
<p>Хаос может быть удивительной творческой силой, воздвигающая новые здания из пыли.
Хаос вызывает несчастные случаи, задержки и потери. Он вводит проекты в стресс и разочарование.
Это означает, что вы действительно не контролируете ситуацию.</p>


 </section>

  <Section4>
<aside>
  
  
  <h1>Отслеживайте доставку по всей цепочке поставок</h1>


<p>От поставщика до субподрядчика - вы всегда знаете, где находятся ваши материалы, благодаря чему обычные отходы уходят в прошлое и сокращаются несчастные случаи на месте.</p>
</aside>
<img src={qirowa} alt="" />

 </Section4>

  <Section4>


    <img src={stroiteloinav} alt="" />
<aside>
  
  
  <h1>Оптимизируйте и контролируйте свое прибытие на место</h1>


<p>От поставщика до субподрядчика - вы всегда знаете, где находятся ваши материалы, благодаря чему обычные отходы уходят в прошлое и сокращаются несчастные случаи на месте.</p>
</aside>


 </Section4>


 <Section4>
<aside>
  
  
  <h1>Отслеживайте доставку по всей цепочке поставок</h1>


<p>От поставщика до субподрядчика - вы всегда знаете, где находятся ваши материалы, благодаря чему обычные отходы уходят в прошлое и сокращаются несчастные случаи на месте.</p>
</aside>
<img src={pashak} alt="" />

 </Section4>
 <section className='section_5'>
<div className='ggg'>  <h1>Доставка стала проще</h1>
  <p>Мы позаботимся обо всех ваших различных поставках и их многочисленных специализированных требованиях к разгрузке.</p></div>

<div className='main'>
<div className='icons'>
<Car style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Бетон</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<Club style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Бетон</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<TextCursor style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Курсор</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<Club style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Бетон</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<Plug  style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Изоляция</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<BatteryFull style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Норматизация</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<Zap  style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Движок</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<Heater style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Бетон</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>
<div className='icons'>
<Trash style={{width:'100px',height:'100px',marginTop:'-10px'}} />
<div>
  <h1>Утилизация</h1>
  <p>Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.</p>
</div>
</div>

</div>

 </section>


  <section className='section_3'>
<h1>Надёжность</h1>
<p>Благодаря надёжному строительству выигрывают все - муниципальные органы выполняют свои обязанности перед гражданами, инвесторы получают сертификаты своих проектов, а генеральные подрядчики получают повышенную репутацию.</p>
 </section>
<section className='section_6'>
  <Article1>

    <Omega size={40} />
<h1>Сниженное загрязнение</h1>
<p>При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>

  </Article1>
    <Article1>

   <TruckElectric size={40} />
<h1>Улучшенное влияние на общество </h1>
<p>При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>

  </Article1>
    <Article1>

    <LassoSelect size={40} />
<h1>Улучшенное управление отходами</h1>
<p>При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.</p>

  </Article1>

</section>



<section className="sec6">
        <aside>
          <h1>Создан для строительства</h1>
          <ul>
            <li>
              Независимо от того, солнечно или темно, найдется подходящий режим
              экрана
            </li>
            <li>
              Поддержка международных языков На современной стройке работают
              люди со всего мира. Язык не является проблемой для СтройКонтроля.
            </li>
            <li>
              Работает на любом устройстве - мобильном телефоне, планшете,
              ноутбуке Люди на разных должностях используют разные устройства.
              СтройКонтроль автоматически настраивается в соответствии с
              требованиями. Вы также можете проецировать панели мониторинга
              живого проекта на настенные экраны.
            </li>
          </ul>

          <div>
          {/* <Button1></Button1> */}
          </div>  
        </aside>

        <img src={apple} alt="" />
      </section>

       <Section4>


    <img src={stroiteloinav} alt="" />
<aside>
  
  
  <h1>Оптимизируйте и контролируйте свое прибытие на место</h1>


<p>От поставщика до субподрядчика - вы всегда знаете, где находятся ваши материалы, благодаря чему обычные отходы уходят в прошлое и сокращаются несчастные случаи на месте.</p>
</aside>


 </Section4>


  <section className='section_3'>
<h1>Движок-милости жто подобное раздучения при них</h1>
<p>Хаос может быть удивительной творческой силой, воздвигающая новые здания из пыли.
Хаос вызывает несчастные случаи, задержки и потери. Он вводит проекты в стресс и разочарование.
Это означает, что вы действительно не контролируете ситуацию.</p>


 </section>

 <img className='gr75' src={gr75} alt="" />


<section className='section_8'>
  <h1>Умная доставка материалов для сложных строительных площадок</h1>
  <div className='diblbutton'>
    <Button1/>
  <button className='Подробнее'>Подробнее</button>

  </div>
 
</section>

<footer>

<ul>
  <li><img src={logo} alt="" /></li>
  <li>Пресненская наб., 88, оф. 527</li>
  <li>+7 (945) 123-45-67</li>
  <li>г. Москва</li>
</ul>
<ul className='none'>
 
  <li>Пазод</li>

</ul>
<ul className='none'>
 
  <li>Пресненская наб., 88, оф. 527</li>
  <li>Дома</li>
  <li>Решение</li>
</ul>
<ul className='none'>

  <li>Процесс</li>
  <li>Завод</li>
 
</ul>

</footer>
  </>
}