import { useState } from 'react';
import DAW from './DAW';
import About from './About';
import Modal from './Modal';

const Treackter = () => {

  // Web Audio API setup
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext || false;
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  // Startup modal
  const [modalVisibility, setModalVisibility] = useState(true);

  // Use user interaction to start audio
  const initAudio = () => {
    // Hide modal
    setModalVisibility(false);

    // No AudioContext found
    if (!AudioContext) {
      alert('Daw only works on modern browsers. Please, consider using Chrome or Firefox.');
      return;
    }

    const context = new AudioContext();
    setAudioContext(context);
  }


  // Web broswer ccons
  const safari = (
    <svg className="fill-[#0cbaeb] w-[20px] inline mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z" />
    </svg>
  );

  const chrome = (
    <svg className="fill-[#f9be14] w-[20px] inline mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
    </svg>
  );

  const firefox = (
    <svg className="fill-[#ff5d30] w-[20px] inline mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M503.52,241.48c-.12-1.56-.24-3.12-.24-4.68v-.12l-.36-4.68v-.12a245.86,245.86,0,0,0-7.32-41.15c0-.12,0-.12-.12-.24l-1.08-4c-.12-.24-.12-.48-.24-.6-.36-1.2-.72-2.52-1.08-3.72-.12-.24-.12-.6-.24-.84-.36-1.2-.72-2.4-1.08-3.48-.12-.36-.24-.6-.36-1-.36-1.2-.72-2.28-1.2-3.48l-.36-1.08c-.36-1.08-.84-2.28-1.2-3.36a8.27,8.27,0,0,0-.36-1c-.48-1.08-.84-2.28-1.32-3.36-.12-.24-.24-.6-.36-.84-.48-1.2-1-2.28-1.44-3.48,0-.12-.12-.24-.12-.36-1.56-3.84-3.24-7.68-5-11.4l-.36-.72c-.48-1-.84-1.8-1.32-2.64-.24-.48-.48-1.08-.72-1.56-.36-.84-.84-1.56-1.2-2.4-.36-.6-.6-1.2-1-1.8s-.84-1.44-1.2-2.28c-.36-.6-.72-1.32-1.08-1.92s-.84-1.44-1.2-2.16a18.07,18.07,0,0,0-1.2-2c-.36-.72-.84-1.32-1.2-2s-.84-1.32-1.2-2-.84-1.32-1.2-1.92-.84-1.44-1.32-2.16a15.63,15.63,0,0,0-1.2-1.8L463.2,119a15.63,15.63,0,0,0-1.2-1.8c-.48-.72-1.08-1.56-1.56-2.28-.36-.48-.72-1.08-1.08-1.56l-1.8-2.52c-.36-.48-.6-.84-1-1.32-1-1.32-1.8-2.52-2.76-3.72a248.76,248.76,0,0,0-23.51-26.64A186.82,186.82,0,0,0,412,62.46c-4-3.48-8.16-6.72-12.48-9.84a162.49,162.49,0,0,0-24.6-15.12c-2.4-1.32-4.8-2.52-7.2-3.72a254,254,0,0,0-55.43-19.56c-1.92-.36-3.84-.84-5.64-1.2h-.12c-1-.12-1.8-.36-2.76-.48a236.35,236.35,0,0,0-38-4H255.14a234.62,234.62,0,0,0-45.48,5c-33.59,7.08-63.23,21.24-82.91,39-1.08,1-1.92,1.68-2.4,2.16l-.48.48H124l-.12.12.12-.12a.12.12,0,0,0,.12-.12l-.12.12a.42.42,0,0,1,.24-.12c14.64-8.76,34.92-16,49.44-19.56l5.88-1.44c.36-.12.84-.12,1.2-.24,1.68-.36,3.36-.72,5.16-1.08.24,0,.6-.12.84-.12C250.94,20.94,319.34,40.14,367,85.61a171.49,171.49,0,0,1,26.88,32.76c30.36,49.2,27.48,111.11,3.84,147.59-34.44,53-111.35,71.27-159,24.84a84.19,84.19,0,0,1-25.56-59,74.05,74.05,0,0,1,6.24-31c1.68-3.84,13.08-25.67,18.24-24.59-13.08-2.76-37.55,2.64-54.71,28.19-15.36,22.92-14.52,58.2-5,83.28a132.85,132.85,0,0,1-12.12-39.24c-12.24-82.55,43.31-153,94.31-170.51-27.48-24-96.47-22.31-147.71,15.36-29.88,22-51.23,53.16-62.51,90.36,1.68-20.88,9.6-52.08,25.8-83.88-17.16,8.88-39,37-49.8,62.88-15.6,37.43-21,82.19-16.08,124.79.36,3.24.72,6.36,1.08,9.6,19.92,117.11,122,206.38,244.78,206.38C392.77,503.42,504,392.19,504,255,503.88,250.48,503.76,245.92,503.52,241.48Z" />
    </svg>
  );

  const opera = (
    <svg className="fill-[#ff1b2d] w-[20px] inline mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M313.9 32.7c-170.2 0-252.6 223.8-147.5 355.1 36.5 45.4 88.6 75.6 147.5 75.6 36.3 0 70.3-11.1 99.4-30.4-43.8 39.2-101.9 63-165.3 63-3.9 0-8 0-11.9-.3C104.6 489.6 0 381.1 0 248 0 111 111 0 248 0h.8c63.1.3 120.7 24.1 164.4 63.1-29-19.4-63.1-30.4-99.3-30.4zm101.8 397.7c-40.9 24.7-90.7 23.6-132-5.8 56.2-20.5 97.7-91.6 97.7-176.6 0-84.7-41.2-155.8-97.4-176.6 41.8-29.2 91.2-30.3 132.9-5 105.9 98.7 105.5 265.7-1.2 364z" />
    </svg>
  );

  const edge = (
    <svg className="fill-[#30c497] w-[20px] inline mb-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M120.1 37.44C161.1 12.23 207.7-.7753 255 .0016C423 .0016 512 123.8 512 219.5C511.9 252.2 499 283.4 476.1 306.7C453.2 329.9 422.1 343.2 389.4 343.7C314.2 343.7 297.9 320.6 297.9 311.7C297.9 307.9 299.1 305.5 302.7 302.3L303.7 301.1L304.1 299.5C314.6 288 320 273.3 320 257.9C320 179.2 237.8 115.2 136 115.2C98.46 114.9 61.46 124.1 28.48 142.1C55.48 84.58 111.2 44.5 119.8 38.28C120.6 37.73 120.1 37.44 120.1 37.44V37.44zM135.7 355.5C134.3 385.5 140.3 415.5 152.1 442.7C165.7 469.1 184.8 493.7 208.6 512C149.1 500.5 97.11 468.1 59.2 422.7C21.12 376.3 0 318.4 0 257.9C0 206.7 62.4 163.5 136 163.5C172.6 162.9 208.4 174.4 237.8 196.2L234.2 197.4C182.7 215 135.7 288.1 135.7 355.5V355.5zM469.8 400L469.1 400.1C457.3 418.9 443.2 435.2 426.9 449.6C396.1 477.6 358.8 495.1 318.1 499.5C299.5 499.8 281.3 496.3 264.3 488.1C238.7 477.8 217.2 458.1 202.7 435.1C188.3 411.2 181.6 383.4 183.7 355.5C183.1 335.4 189.1 315.2 198.7 297.3C212.6 330.4 236.2 358.6 266.3 378.1C296.4 397.6 331.8 407.6 367.7 406.7C398.7 407 429.8 400 457.9 386.2L459.8 385.3C463.7 383 467.5 381.4 471.4 385.3C475.9 390.2 473.2 394.5 470.2 399.3C470 399.5 469.9 399.8 469.8 400V400z" />
    </svg>
  );

  return (
    <div>
      {/* Turn device notification */}
      <div className="landscape:hidden">
        <div className="bg-primary text-secondary rounded-lg w-[90vw] h-screen m-auto flex flex-col gap-10 justify-center items-center">
          {/* Icons */}
          <div className="flex gap-10">
            <svg className="fill-white w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <svg className="fill-white w-[30px] animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            <svg className="fill-white w-[50px] rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
          </div>
          {/* Alert */}
          <span className="md:text-3xl text-xl text-secondary text-center">
            Please, turn your device <br /> into landscape mode
          </span>
        </div>
      </div>
      {/* User interaction to start audio */}
      <Modal visible={modalVisibility}>
        <div>
          <h3 className="text-xl font-bold text-center text-secondary mb-5">Welcome to Daw</h3>
          <p className="text-lg text-secondary mb-5">
            Start making catchy beats directly in your <b>web browser</b>!
          </p>
          <p className="text-lg text-secondary mb-5">
            Daw works best on these <b>browsers</b>: {chrome} {firefox} {opera} {edge}. 
            The way {safari} handles the Web Audio API can be troublesome for this app.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-secondary w-24 rounded-lg py-2 text-primary font-bold hover:brightness-75 shadow-lg"
              onClick={initAudio}
            >
              Let's begin
            </button>
          </div>
        </div>
      </Modal> 
      {/* Main App */}
      <div className="portrait:hidden">
        <div className="flex h-screen">
          {/* Header */}
          <div className="w-[5%] self-center flex justify-center items-center">
            {/* <h1 className="lg:text-2xl text-xl text-secondary font-bold tracking-widest -rotate-90 drop-shadow-lg">Treackter</h1> */}
          </div>
          {/* DAW */}
          <div className="w-[90%] h-fit self-center">
            {audioContext && <DAW audioContext={audioContext} />}
          </div>
          {/* About Section */}
          <div className="w-[5%]">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treackter;
