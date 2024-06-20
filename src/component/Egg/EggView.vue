<template>
    <div class="egg-container">
  <div class="gachapon-machine">
    <div class="machine-body">
      <div class="display">
        <div class="capsules-container">
         <div
      v-for="(level, index) in levels"
      :key="index"
      class="capsule"
      :style="{
    backgroundColor: level.color,
     animationPlayState: isShaking ? 'running' : 'paused',
      }"
    ></div>
        </div>
      </div>
      <div class="dispenser">
        <div class="capsule-slot" :class="{ 'open': isOpen }">
          <div class="dispensed-capsule" :class="{ 'animate': isAnimating }" :style="{ backgroundColor: dispensedCapsuleColor }"></div>
        </div>
        <button @click="dispenseGachapon">
          <span v-if="!isDispensing">開始抽獎</span>
          <span v-else>抽獎中</span>
        </button>
      </div>
    </div>
    <div v-if="result !== null" class="result-container">
      <div class="result">
        <p>抽獎結果: {{ result.level }}</p>
        <button @click="reset">前往會員中心</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levels: [
        { name: '5%折扣券', ratio: 6, color: '#7CFC00' },
        { name: '10%折扣券', ratio: 6, color: '#FF1493' },
        { name: '20%折扣券', ratio: 2, color: '#FFD700' },
        { name: '特獎：半價券', ratio: 1, color: '#00BFFF' },
        { name: '', ratio: 0, color: '#00BFFF' },
        { name: '', ratio: 0, color: '#FFD700' },
        { name: '', ratio: 0, color: '#00BFFF' },
        { name: '', ratio: 0, color: '#FFD700' }
      ],
      balls: [],
      isOpen: false,
      isAnimating: false,
      isDispensing: false,
      dispensedCapsuleColor: '',
        result: null,
        isShaking: false,
        hasShaken: false,
    }
  },
  methods: {
    dispenseGachapon() {
  if (!this.isDispensing && !this.hasShaken) {
    this.isDispensing = true;
    this.calculateProbabilities();
    const randomCapsuleIndex = Math.floor(Math.random() * this.balls.length);
    this.dispensedCapsuleColor = this.balls[randomCapsuleIndex].color;
    this.isOpen = true;
    this.isShaking = true; // 觸發搖晃動畫
    this.hasShaken = true; // 設置已搖晃過

    setTimeout(() => {
      this.isAnimating = true;
    }, 1000);
    setTimeout(() => {
      this.isAnimating = false;
      this.isDispensing = false;
      this.isOpen = false;
      this.drawResult(randomCapsuleIndex);
    }, 3000);
    setTimeout(() => {
      this.isShaking = false;
    }, 2000);
  }
},
    calculateProbabilities() {
      const totalRatio = this.levels.reduce((sum, level) => sum + level.ratio, 0);
      this.balls = [];
      for (let i = 0; i < this.levels.length; i++) {
        const level = this.levels[i];
        const count = Math.floor((level.ratio / totalRatio) * 15);
        for (let j = 0; j < count; j++) {
          this.balls.push({ level: level.name, color: level.color, probability: level.ratio / totalRatio });
        }
      }
    },
    drawResult(randomCapsuleIndex) {
      this.result = {  level: this.balls[randomCapsuleIndex].level };
    },
    reset() {
        this.result = null;
      this.hasShaken = true;
    }
  }
}
</script>

<style scoped>
.egg-container{
padding-bottom: 3rem;
display: flex;
justify-content: center;
align-items: center;
}


.result-container {
  position: relative; 
}

.result {
  position: absolute;
  transform: translate(-93%, -50%);
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: #b5d2fe 0px 0px 10px;
}

.gachapon-machine {
  width: 300px;
  height: 450px;
  background-color: #b5d2fe;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.machine-body {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.display {
  width: 100%;
  height: 200px;
  background-color: #eaf4ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.capsules-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.capsule {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: shake 2s ease-in-out;
  animation-play-state: paused;
}
.capsule:nth-child(1) {
 top: 130px;
 left: 150px;
}
.capsule:nth-child(2) {
 top: 130px;
 left: 50px;
}
.capsule:nth-child(8) {
 top: 150px;
 right: 130px;
}
.capsule:nth-child(3) {
 top: 150px;
 right: 180px;
}
.capsule:nth-child(7) {
 top: 160px;
 right: 80px;
}
.capsule:nth-child(6) {
 top: 150px;
 right: 30px;
}
.capsule:nth-child(5) {
 top: 120px;
 left: 120px;
}
.capsule:nth-child(4) {
 top: 120px;
 right: 120px;
}
@media screen and (max-width: 468px) {
    .capsule:nth-child(3) {
 top: 120px;
 right: 70px;
}
}

@keyframes shake {
  0% { transform: translate(0, 0) rotate(0deg); }
  5% { transform: translate(-1px, -1px) rotate(-1deg); }
  10% { transform: translate(1px, 1px) rotate(1deg); }
  15% { transform: translate(-1px, 1px) rotate(-1deg); }
  20% { transform: translate(1px, -1px) rotate(1deg); }
  25% { transform: translate(-1px, 0px) rotate(-1deg); }
  30% { transform: translate(1px, 0px) rotate(1deg); }
  35% { transform: translate(0px, 1px) rotate(0deg); }
  40% { transform: translate(0px, -1px) rotate(0deg); }
  45% { transform: translate(1px, 1px) rotate(-1deg); }
  50% { transform: translate(-1px, -1px) rotate(1deg); }
  55% { transform: translate(1px, 0px) rotate(-1deg); }
  60% { transform: translate(-1px, 0px) rotate(1deg); }
  65% { transform: translate(0px, 1px) rotate(0deg); }
  70% { transform: translate(0px, -1px) rotate(0deg); }
  75% { transform: translate(1px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  85% { transform: translate(1px, 0px) rotate(-1deg); }
  90% { transform: translate(-1px, 0px) rotate(1deg); }
  95% { transform: translate(0px, 1px) rotate(0deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

.dispenser {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.capsule-slot {
  width: 80px;
  height: 80px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.capsule-slot.open::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
}

.dispensed-capsule {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom:120px;
  transition: transform 1s;
}

.dispensed-capsule.animate {
  transform: translateY(130px);
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff99cc;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

</style>