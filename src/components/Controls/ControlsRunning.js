import React from 'react';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsVolume = ({ volume, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel htmlFor="control-running">{t('Volume')}</InputLabel>
      <Switch color="primary" checked={volume} onChange={onChange}/>
    </div>
  )
}

export default ControlsVolume;
