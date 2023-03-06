import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';

import { getPhonesArrayForExcel } from '../../../src/utils/getPhonesArrayForExcel';

XLSX.set_fs(fs);
XLSX.stream.set_readable(Readable);
XLSX.set_cptable(cpexcel);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {phones} = req.body;
  const data = getPhonesArrayForExcel(phones);

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Телефоны');
  XLSX.utils.sheet_add_aoa(worksheet, [['Телефон']], {origin: "A1"});

  worksheet['!cols'] = [{wch: 13}];

  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  res
    .setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    .setHeader('Content-Disposition', `attachment; filename="phones.xlsx"`)
    .send(buffer);
}
