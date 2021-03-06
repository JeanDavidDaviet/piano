import React, { useState } from 'react';
import Settings from '@material-ui/icons/Settings';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useTranslation } from 'react-i18next';

const rows = [
  ['Space', 'Play/Pause'],
  ['Up arrow', 'Change scale up one half a tone'],
  ['Down arrow', 'Change scale down one half a tone'],
  ['Left arrow', 'Accelerate tempo up 20 units'],
  ['Right arrow', 'Decelerate tempo up 20 units'],
];

const SettingsDialog = () => {
  const { t } = useTranslation();
  const [optionTab, setOptionTab] = useState(0);
  const [opened, setOpen] = useState(false);
  return (
      <>
        <Settings onClick={() => setOpen(!opened)} color="primary" fontSize="small" style={{float: 'right', cursor: 'pointer'}}></Settings>
        <Dialog open={opened} onClose={() => setOpen(!opened)} aria-labelledby="simple-dialog-title">
            <Tabs value={optionTab} onChange={(event, value) => {setOptionTab(value)}}>
                <Tab label={t('Shortcuts')} />
            </Tabs>
            {optionTab === 0 && <Typography component="div" style={{ padding: 8 * 3 }}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell align="right">{t('Shortcuts')}</TableCell>
                    <TableCell align="right">{t('Action')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, key) => (
                    <TableRow key={key}>
                        <TableCell align="right">{t(row[0])}</TableCell>
                        <TableCell align="right">{t(row[1])}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </Typography>}
        </Dialog>
    </>
  )
}

export default SettingsDialog;

