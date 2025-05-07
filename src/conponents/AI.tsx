import React from "react";

export default function AI() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://doodee.in.th/wp-content/uploads/2020/04/NetApp-AI-in-Healthcare__003-.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              AI ตรวจวินิฉัยโรค
            </h1>
            <p className="mb-8 leading-relaxed">
              คำชี้แจงเกี่ยวกับการตรวจวินิฉัยโรคมะเร็งปอด
              <ol>
                <li>
                  ถ้าผลการพยากรเป็น lung_aca หมายความว่าเป็นโรคมะเร็งชนิด aca
                </li>
                <li>
                  ถ้าผลการพยากรเป็น lung_normal หมายความว่า ปกติ ไม่มีมะเร็งปอด
                </li>
                <li>
                  ถ้าผลการพยากรเป็น lung_scc หมายความว่าเป็นโรคมะเร็งชนิด scc
                </li>
              </ol>
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-gray-700 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                คลิกตรวจโรคมะเร็งปอดที่นี่
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
