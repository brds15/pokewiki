import React, { useContext } from 'react';
import {
  DetailContainer,
  HoldIcon,
  ResizeContainer,
  BoxContainer,
  Label,
  Value,
  ContentContainer,
  Wrapper,
  ColorCircle
} from './Styles';
import { DetailContext } from '../../context/DetailProvider';
import colors from '../../styles/colors';
import Category from '../Category';
import { useTranslation } from 'react-i18next';

export const Detail = () => {
  const { data } = useContext(DetailContext);
  const { t } = useTranslation();

  return data && data.name ? (
    <DetailContainer>
      <ResizeContainer>
        <HoldIcon />
      </ResizeContainer>
      <Wrapper>
        <Category color={colors.orange} title={`#${data.id} ${data.name}`}>
          <ContentContainer>
            <BoxContainer>
              <Label>{t('color')}</Label>
              <ColorCircle color={data.color} />
            </BoxContainer>

            <BoxContainer>
              <Label>{t('captureRate')}</Label>
              <Value>{data.captureRate}</Value>
            </BoxContainer>

            <BoxContainer>
              <Label>{t('isBaby')}</Label>
              <Value>{data.isBaby ? t('yes') : t('no')}</Value>
            </BoxContainer>

            <BoxContainer>
              <Label>{t('isLegendary')}</Label>
              <Value>{data.isLegendary ? t('yes') : t('no')}</Value>
            </BoxContainer>

            <BoxContainer>
              <Label>{t('happiness')}</Label>
              <Value>{data.happiness}</Value>
            </BoxContainer>

            {data.habitat && (
              <BoxContainer>
                <Label>{t('habitat')}</Label>
                <Value>{data.habitat ? data.habitat : ''}</Value>
              </BoxContainer>
            )}
          </ContentContainer>
        </Category>
      </Wrapper>
    </DetailContainer>
  ) : (
    <></>
  );
};

export default Detail;
