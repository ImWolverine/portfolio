const Intro = ({ name, description }) => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          👋 I'm{' '}
          <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default Intro
