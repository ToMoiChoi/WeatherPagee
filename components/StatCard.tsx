"use client";

import { Metric } from "@tremor/react";
import { Card } from "@tremor/react";
import { Text, Color } from "@tremor/react";

type Props = {
  tittle: string,
  metrics: string,
  color?: Color,
};
function StatCard({ tittle, metrics, color }: Props) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{tittle}</Text>
      <Metric>{metrics}</Metric>
    </Card>
  );
}

export default StatCard;
