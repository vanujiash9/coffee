import { useState } from "react";

function Index() {
  const [feedback, setFeedback] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const changeHandler = (e) => {
    const slider = document.getElementById("slider");
    slider.defaultValue = 0;
    const react1 = document.querySelector("#react1");
    const react2 = document.querySelector("#react2");
    const react3 = document.querySelector("#react3");
    const exp = document.querySelector("#exp");

    switch (parseInt(e.target.value)) {
      case 0:
        react1.style.display = "block";
        react2.style.display = "none";
        react3.style.display = "none";
        slider.classList.add("accent-red-500");
        slider.classList.remove("accent-blue-500");
        slider.classList.remove("accent-green-500");
        exp.innerText = "Tệ";
        setFeedback("Tệ");
        break;
      case 1:
        react2.style.display = "block";
        react1.style.display = "none";
        react3.style.display = "none";
        slider.classList.remove("accent-red-500");
        slider.classList.add("accent-blue-500");
        slider.classList.remove("accent-green-500");
        exp.innerText = "Tốt";
        setFeedback("Tốt");
        break;
      case 2:
        react3.style.display = "block";
        react1.style.display = "none";
        react2.style.display = "none";
        slider.classList.remove("accent-blue-500");
        slider.classList.add("accent-green-500");
        exp.innerText = "Tuyệt vời";
        setFeedback("Tuyệt vời");
        break;
      default:
        react1.style.display = "block";
        react3.style.display = "none";
        react2.style.display = "none";
        break;
    }

    // Hiển thị thông báo cảm ơn
    if (e.target.value !== "") {
      setShowThankYou(true);
    }
  };

  return (
    <>
      <div>
        <div className="py-12 px-4">
          <div className="mx-auto container lg:max-w-[356px] md:max-w-[720px] max-w-[343px] py-8 px-8 bg-white shadow rounded-md">
            <p className="text-base font-semibold leading-normal text-center text-gray-800">
              Bạn thấy trải nghiệm của chúng tôi thế nào?
            </p>
            <div
              id="react1"
              style={{ display: "block" }}
              className="border mx-auto rounded-full w-[64px] h-[64px] border-red-500 relative mt-6 mb-6"
            >
              <span className="text-5xl text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                😞
              </span>
            </div>
            <div
              id="react2"
              style={{ display: "none" }}
              className="border mx-auto rounded-full w-[64px] h-[64px] border-blue-500 relative mt-6 mb-6"
            >
              <span className="text-5xl text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                🙂
              </span>
            </div>
            <div
              id="react3"
              style={{ display: "none" }}
              className="border mx-auto rounded-full w-[64px] h-[64px] border-green-400 relative mt-6 mb-6"
            >
              <span className="text-5xl text-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                😃
              </span>
            </div>
            <p id="exp" className="text-sm leading-none text-center text-gray-600">
              {/* Rating text */}
            </p>
            <div className="mt-6">
              <input
                id="slider"
                type="range"
                min="0"
                max="2"
                step="1"
                onChange={changeHandler}
                className="w-full accent-gray-400"
              />
            </div>
            {showThankYou && (
              <div className="mt-6 text-center text-gray-600">
                <p>Cảm ơn bạn đã phản hồi! Bạn đã đánh giá chúng tôi là: {feedback}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
