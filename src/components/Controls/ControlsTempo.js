import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsTempo = ( { tempo, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="tempo-native-label-placeholder">Tempo</InputLabel><br />
    <NativeSelect value={tempo} onChange={onChange} input={<Input name="tempo" id="tempo-native-label-placeholder" />}>
      <option value={20}>20</option>
      <option value={40}>40</option>
      <option value={60}>60</option>
      <option value={80}>80</option>
      <option value={100}>100</option>
      <option value={120}>120</option>
    </NativeSelect>
  </div>
)

export default ControlsTempo;