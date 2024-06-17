import Image from "next/image";
import React from "react";

const About = () => {
    return (
    <div>
        <div className="mx-auto w-5/6 text-purple-900">
        <h1 className="pb-2 pt-4 text-2xl font-bold">내 차 어딨노?</h1>
        <p>
            이 웹 프로그램은 자동차의 주차위치를 기억해 두고, 공유도 할 수 있는 앱
            입니다.
        </p>
        <Image
            className="w-full"
            src="/image/Whereismycar1.jpg"
            alt="whereismycar"
            width={200}
            height={200}
        />
        </div>
    </div>
    );
};

export default About;
