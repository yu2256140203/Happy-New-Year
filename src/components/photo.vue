<template>
    <div style="width:850px">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

    <section class="hero-section" style="border-radius: 10px; border:3px solid #fff; box-shadow: 0px 0px 20px skyblue,0px 0px 20px skyblue inset;">
        <div class="card-grid">
            <a class="card" >
                <div class="card__background"
                    style="background-image: url(https://yu-space.oss-cn-beijing.aliyuncs.com/图片/20221109223045.png)">
                </div>
                <div class="card__content">
                    <p class="card__heading">Spring</p>
                    <h3 class="card__Season">Spring is when you feel like whistling even with a shoe full of slush.</h3>
                </div>
            </a>
            <a class="card" href="#">
                <div class="card__background"
                    style="background-image: url(https://yu-space.oss-cn-beijing.aliyuncs.com/图片/20221109223120.png)">
                </div>
                <div class="card__content">
                    <p class="card__heading">Summer</p>
                    <h3 class="card__Season">It was June, and the world smelled of roses. The sunshine was like powdered gold over the grassy hillside</h3>
                </div>
            </a>
            <a class="card" href="#">
                <div class="card__background"
                    style="background-image: url(https://yu-space.oss-cn-beijing.aliyuncs.com/图片/20221109223156.png)">
                </div>
                <div class="card__content">
                    <p class="card__heading">Autumn</p>
                    <h3 class="card__Season">I loved autumn, the one season of the year that God seemed to have put there just for the beauty of it.</h3>
                </div>
            </a>
            
                <a class="card" preview="">
                    <div class="card__background"
                        style="background-image: url(https://yu-space.oss-cn-beijing.aliyuncs.com/图片/20221109223228.png)">
                    </div>
                    <div class="card__content">
                        <p class="card__heading">Winter</p>
                        <h3 class="card__Season">The meaning of the cold, perhaps is to let you find something warmer.</h3>
                    </div>
                </a>
            
                
            </div>
    </section>
    </div>

</template>
<style>
:root{
  --background-dark: #2d3548;
  --text-light: rgba(255,255,255,0.8);
  --text-lighter: rgba(255,255,255,0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 1200px;
}

*{
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}

body{
  height: 100%;
}

.hero-section{
  align-items: flex-start;
  width: 900px;
  height: 500px;
  background-image: linear-gradient(15deg, #70a4c56c 0%, #91c0c86c 150%);
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
}

.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
}

@media(min-width: 540px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media(min-width: 960px){
  .card-grid{
    grid-template-columns: repeat(4, 1fr); 
  }
}

.card{
  list-style: none;
  position: relative;
}

.card:before{
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background{
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  trsnsform: scale(1) translateZ(0);
  transition: 
    filter 200ms linear,
    transform 200ms linear;
}

.card:hover .card__background{
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background{
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card__content{
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__Season{
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  /* text-transform: uppercase; */
}

.card__heading{
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}
</style>