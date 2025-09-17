import React from "react";
import styled from "styled-components";
import { md } from "../../../layouts/breakpoints";

const EquipmentWrapper = styled.div`
  background: #eee;
  width: 100%;
  margin-top: clamp(48px, 4.875vw, 78px);
  padding: 42px 80px 49px 80px;
  border-radius: 16px;
  li p {
    letter-spacing: 0.1em;
  }
  @media ${md.between("sm", "lg")} {
    padding: 24px 60px 24px 60px;
  }
  @media ${md.down("sm")} {
    padding: 24px 11vw 24px 11vw;
  }
`;
const EquipmentListWrapper = styled.div`
  @media ${md.up("lg")} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: clamp(40px, 3vw, 80px);
  }
  @media ${md.down("lg")} {
  }
`;
const Count = styled.p``;
const Ul = styled.ul`
  margin: 0;
  width: 250px;
  text-align: left;
`;
type EquipmentListItemProps = {
  name: string;
  count?: string;
};

type EquipmentListProps = {
  col1: EquipmentListItemProps[];
  col2: EquipmentListItemProps[];
};
const EquipmentList = ({
  equipmentListItems,
}: {
  equipmentListItems: EquipmentListProps;
}) => {
  return (
    <EquipmentWrapper>
      <EquipmentListWrapper>
        <Ul>
          {equipmentListItems["col1"].map((item, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>{item.name}</p>
                {item.count && (
                  <>
                    <span
                      style={{
                        width: "5%",
                        height: "1px",
                        background: "black",
                      }}
                    />
                    <Count>{item.count}</Count>
                  </>
                )}
              </div>
            </li>
          ))}
        </Ul>
        <Ul>
          {equipmentListItems["col2"].map((item, index) => (
            <li
              key={index}
              style={{
                listStyle: "disc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>{item.name}</p>
                {item.count && (
                  <>
                    <span
                      style={{
                        width: "5%",
                        height: "1px",
                        background: "black",
                      }}
                    />
                    <Count>{item.count}</Count>
                  </>
                )}
              </div>
            </li>
          ))}
        </Ul>
      </EquipmentListWrapper>
    </EquipmentWrapper>
  );
};

export default EquipmentList;
