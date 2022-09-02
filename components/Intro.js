import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const Intro = ({ name, description }) => {
  return (
    <div className="divide-y divide-gray-200 pt-6 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          👋 I'm{' '}
          <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
        <div className="items-left mt-16 flex flex-col">
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
            <SocialIcon kind="github" href={siteMetadata.github} size="6" />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
