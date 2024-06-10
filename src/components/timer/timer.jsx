import "./timer.css";

export function Timer() {
  function countdown() {
    function formatNumber(number) {
      return number < 10 ? `0${number}` : number;
    }
    const countDate = new Date("Jun 20, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = formatNumber(days);
    document.getElementById("hours").innerText = formatNumber(hours);
    document.getElementById("minutes").innerText = formatNumber(minutes);
    document.getElementById("seconds").innerText = formatNumber(seconds);
  }
  setInterval(countdown, 1000);
  return (
    <main class="container-n">
      <div class="content-nt">
        ДО НАЧАЛА <span class="purple-n">СОРЕВНОВАНИЯ</span>
      </div>
      <section class="timer-n">
        {/* <div class="countdown-n"> */}
        <div className="timersEdin">
          <div>
            <span id="days">00</span>
            <span class="doub">:</span>
          </div>
          <span class="sapn-tt">дней</span>
        </div>
        <div className="timersEdin">
          <div>
            <span id="hours">00</span> <span class="doub">:</span>{" "}
          </div>
          <span class="sapn-tt">часов</span>
        </div>
        <div className="timersEdin">
          <div>
            <span id="minutes">00</span>
            <span class="doub">:</span>
          </div>
          <span class="sapn-tt">минут</span>
        </div>
        <div className="timersEdin">
          <div>
            <span id="seconds">00</span>
          </div>
          <span class="sapn-tt">секунд</span>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}
