import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BsQuestionCircle } from 'react-icons/bs'
import Button from '~app/components/Button'
import Tooltip from '~app/components/Tooltip'
import checkIcon from '~assets/icons/check.svg'

const FeatureItem: FC<{ text: string; link?: string }> = ({ text, link }) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={checkIcon} className="w-6 h-6" />
      <span className="text-primary-text font-medium">{text}</span>
      {!!link && (
        <Tooltip content={t('Learn more')}>
          <a href={link} target="_blank" rel="noreferrer">
            <BsQuestionCircle className="cursor-pointer" />
          </a>
        </Tooltip>
      )}
    </div>
  )
}

function PremiumPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-primary-background dark:text-primary-text rounded-[20px] h-full p-[50px] overflow-y-auto">
      <h1 className="font-bold text-[40px] leading-none text-primary-text">{t('Premium')}</h1>
      <div className="mt-10 flex flex-col gap-4">
        <FeatureItem text={t('More bots in All-In-One mode')} />
        <FeatureItem text={t('Chat history full-text search')} />
        <FeatureItem text={t('Customize theme')} />
        <FeatureItem
          text={t('Quick access in Chrome side bar')}
          link="https://github.com/chathub-dev/chathub/wiki/Access-from-Chrome-side-panel"
        />
        <FeatureItem text={t('Activate up to 5 devices')} />
        <FeatureItem text={t('More features in the future')} />
        <FeatureItem text={t('Support the development of ChatHub')} />
      </div>
      <>
        <div className="flex flex-row items-center gap-3 mt-8">
          <Button text={t('🎉 License activated')} color="primary" className="w-fit !py-2" />
        </div>
        <a
          href="https://app.lemonsqueezy.com/my-orders/"
          target="_blank"
          rel="noreferrer"
          className="underline mt-5 text-sm text-secondary-text font-medium w-fit"
        >
          {t('Manage order and devices')}
        </a>
      </>
    </div>
  )
}

export default PremiumPage
