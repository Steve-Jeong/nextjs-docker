import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { authOptions } from "../api/auth/authOptions/authOptions";

const About = async () => {
    const session = await getServerSession(authOptions)
    return (
    <div>
        <div className="mx-auto w-5/6 text-purple-900">
        <h1 className="pb-2 pt-4 text-2xl font-bold">내 차 어딨노?</h1>
        {session && <h2 className="text-xl">안녕하세요? {session.user!.name}님,</h2>}
        <p>
            이 웹 프로그램은 자동차의 주차위치를 기억해 두고, 공유도 할 수 있는 앱
            입니다.
        </p>
        <Image
            className="w-full"
            src="/image/Whereismycar1.jpg"
            alt="whereismycar"
            width={400}
            height={400}
        />
        </div>
    </div>
    );
};

export default About;
