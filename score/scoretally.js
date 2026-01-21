function getParams() {
  const p = new URLSearchParams(window.location.search);
  return {
    score: Number(p.get('score')),
    max: Number(p.get('max')),
    subject: p.get('subject'),
    topic: p.get('topic')
  };
}

function showScore() {
  const { score, max } = getParams();
  document.getElementById('scoreValue').textContent = `${score} / ${max}`;

  let f = '';
  const per = (score / max) * 100;

  if (per === 100) f = 'Perfect! You got all questions right!';
  else if (per >= 80) f = 'Excellent work!';
  else if (per >= 60) f = 'Good job!';
  else if (per >= 40) f = 'Keep practicing!';
  else f = 'Try again for a better score!';

  document.getElementById('scoreFeedback').textContent = f;

  const cc = document.getElementById('scoreCircleVisual');
  cc.innerHTML = '';

  const c = document.createElement('canvas');
  c.width = 240;
  c.height = 240;
  c.style.display = 'block';
  c.style.margin = '0 auto 12px auto';
  cc.appendChild(c);

  const x = c.getContext('2d');
  x.beginPath();
  x.arc(120, 120, 100, 0, 2 * Math.PI);
  x.strokeStyle = '#1a3457';
  x.lineWidth = 24;
  x.stroke();

  x.beginPath();
  x.arc(120, 120, 100, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * (score / max)), false);
  x.strokeStyle = '#2ecc40';
  x.lineWidth = 24;
  x.stroke();

  x.font = 'bold 4rem Open Sans, Arial, sans-serif';
  x.fillStyle = '#fff';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText(`${score}`, 120, 120);

  const td = JSON.parse(localStorage.getItem('quizSummary'));
  if (!td || !td.summary) return;

  const tc = document.getElementById('scoreTallyCards');
  tc.innerHTML = '';

  td.summary.forEach((i, idx) => {
    const d = document.createElement('div');
    d.className = 'score-tally-card';
    d.innerHTML = `<div style="font-weight:700;font-size:1rem;margin-bottom:8px;">Q${idx + 1}: ${i.question}</div>`;

    i.choices.forEach((ch, j) => {
      let hl = '';
      if (j === i.user && j === i.correct) {
        hl = 'background:#2ecc40;color:#fff;border:2px solid #2ecc40;font-weight:700;';
      } else if (j === i.user) {
        hl = 'background:#ffd6d6;color:#0a2236;border:2px solid #ff3b3b;font-weight:700;';
      } else if (j === i.correct) {
        hl = 'background:#d4f7d4;color:#0a2236;border:2px solid #2ecc40;font-weight:700;';
      } else {
        hl = 'background:#1a3457;color:#fff;border:2px solid transparent;';
      }
      d.innerHTML += `<div style="margin:4px 0;padding:8px 12px;border-radius:10px;${hl}">${ch}</div>`;
    });
    tc.appendChild(d);
  });
}

function goHome() {
  window.location.href = '../main/index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('score-tally');
  showScore();
});
