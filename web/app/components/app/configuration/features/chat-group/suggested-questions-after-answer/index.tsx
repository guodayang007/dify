'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  RiQuestionLine,
} from '@remixicon/react'
import Panel from '../../../base/feature-panel'
import SuggestedQuestionsAfterAnswerIcon from '../../../base/icons/suggested-questions-after-answer-icon'
import Tooltip from '../../../../../base/tooltip'

const SuggestedQuestionsAfterAnswer: FC = () => {
  const { t } = useTranslation()

  return (
    <Panel
      title={
        <div className='flex items-center gap-2'>
          <div>{t('appDebug.feature.suggestedQuestionsAfterAnswer.title')}</div>
          <Tooltip htmlContent={<div className='w-[180px]'>
            {t('appDebug.feature.suggestedQuestionsAfterAnswer.description')}
          </div>} selector='suggestion-question-tooltip'>
            <RiQuestionLine className='w-[14px] h-[14px] text-gray-400' />
          </Tooltip>
        </div>
      }
      headerIcon={<SuggestedQuestionsAfterAnswerIcon />}
      headerRight={
        <div className='text-xs text-gray-500'>{t('appDebug.feature.suggestedQuestionsAfterAnswer.resDes')}</div>
      }
      noBodySpacing
    />
  )
}
export default React.memo(SuggestedQuestionsAfterAnswer)