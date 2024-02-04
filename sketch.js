// 웹페이지가 로딩될 때 한 번 실행됩니다.
function setup() {
    createCanvas(400, 400);  // 400px*400px 크기의 캔버스 생성
}

// 매 프레임마다 실행됩니다.
function draw() {
    background(220);  // 배경 색을 (220, 220, 220)으로 지정
    ellipse(mouseX, mouseY, 25, 25); // 마우스 위치에 40*40 크기의 타원 그리기
}