import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  margin-bottom: 8px;
  border: 1px solid #afafaf;
  border-radius: 4px;
  border-collapse: collapse;
  text-align: center;
  font-size: 1.05rem;
  background-color: #f9f9f9;
`;
const TableBody = styled.tbody``;

const TableHeaderRow = styled.tr`
  background-color: #f0f0f0;
  border-bottom: 1px solid #afafaf;
  padding: 8px 0;
  font-weight: bold;
`;

const TableHeaderCell = styled.th`
  border-right: 1px dotted #afafaf;
  padding: 15px 0;
  font-weight: normal;
  letter-spacing: 0.15em;
  &:first-child {
    width: 30%;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #afafaf;
`;

const TableCell = styled.td`
  border-right: 1px dotted #afafaf;
  padding: 17px 0;
  font-size: 16px;
  letter-spacing: 0.05em;
  &:first-child {
    letter-spacing: 0.19em;
    font-size: 15px;
  }
`;

const GalleryPrice = () => {
  return (
    <div>
      <p style={{ marginBottom: "2em" }}>レンタル時間：10:00～18:00</p>
      <Table>
        <TableBody>
          <TableHeaderRow>
            <TableHeaderCell>プラン</TableHeaderCell>
            <TableHeaderCell>料金（税込）</TableHeaderCell>
          </TableHeaderRow>
          <TableRow>
            <TableCell>1時間レンタル</TableCell>
            <TableCell>1,500円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1日レンタル</TableCell>
            <TableCell>
              <span style={{ marginLeft: "18px" }}>
                8,000円（土日9,000円 ）
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1週間レンタル</TableCell>
            <TableCell>
              <span style={{ textDecoration: "line-through" }}>54,000円</span>
              <span style={{ margin: "0 0.4em" }}> → </span>
              <span style={{ color: "red" }}>40,000円 </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default GalleryPrice;
