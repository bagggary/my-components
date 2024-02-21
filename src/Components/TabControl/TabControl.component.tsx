export default function TabControl() {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="tabs has-[input:nth-of-type(1)] relative grid h-12 auto-cols-fr grid-flow-col rounded-lg border-4 border-black bg-black after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[calc(100%/var(--count,3))] after:translate-x-[calc(var(--active,0)*100%)] after:rounded-md after:bg-white after:mix-blend-difference after:outline after:outline-2 after:outline-transparent after:transition-[transform,outline] after:duration-200 after:content-[''] has-[input:nth-of-type(2)]:[--count:2] has-[input:nth-of-type(3)]:[--count:3] has-[:checked:nth-of-type(1)]:[--active:0] has-[:checked:nth-of-type(2)]:[--active:1] has-[:checked:nth-of-type(3)]:[--active:2] has-[:focus-visible]:after:outline-red-500">
        <input
          defaultChecked
          type="radio"
          id="html"
          name="fav_language"
          value="HTML"
          className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
        />
        <label
          className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
          htmlFor="html"
        >
          HTML
        </label>
        <input
          type="radio"
          id="css"
          name="fav_language"
          value="CSS"
          className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
        />
        <label
          className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
          htmlFor="css"
        >
          CSS
        </label>
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
          className="sr-only [&:checked+label]:[--highlight:1;]  [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
        />
        <label
          className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
          htmlFor="javascript"
        >
          JavaScript
        </label>
      </div>
      {/* part 2 */}
      <div className="tabs has-[input:nth-of-type(1)] relative grid h-12 auto-cols-fr grid-flow-col rounded-lg border-4 border-black bg-black after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[calc(100%/var(--count,3))] after:translate-x-[calc(var(--active,0)*100%)] after:rounded-md after:bg-white after:mix-blend-difference after:outline after:outline-2 after:outline-transparent after:transition-[transform,outline] after:duration-200 after:content-[''] has-[input:nth-of-type(2)]:[--count:2] has-[input:nth-of-type(3)]:[--count:3] has-[:checked:nth-of-type(1)]:[--active:0] has-[:checked:nth-of-type(2)]:[--active:1] has-[:checked:nth-of-type(3)]:[--active:2] has-[:focus-visible]:after:outline-red-500">
        <input
          type="radio"
          id="htmlTwo"
          name="fav_language_two"
          value="HTMLTwo"
          className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
        />
        <label
          htmlFor="htmlTwo"
          className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
        >
          HTML
        </label>
        <input
          type="radio"
          id="cssTwo"
          name="fav_language_two"
          value="CSSTwo"
          className="sr-only [&:checked+label]:[--highlight:1;] [&:not(:checked)+label:hover]:bg-[hsl(0,0%,20%)] [&:not(:checked)+label:hover]:[--highlight:0.35;]"
        />
        <label
          htmlFor="cssTwo"
          className="grid h-full cursor-pointer place-items-center rounded-md px-[clamp(0.5rem,2vw+0.25rem,2rem)] text-center text-[hsla(0,0%,100%,calc(0.5+var(--highlight,0)))]"
        >
          CSS
        </label>
      </div>
    </div>
  );
}
