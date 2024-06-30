"use client";

import React from 'react';
import { TextElement, LinkElement, ListItemElement, Element } from "@/interfaces/utils";
import { DescrtipionLink, Heading, List, Paragraph } from '.';

type RendererProps = {
  element: Element | ListItemElement | LinkElement;
};

const renderChildren = (children: (TextElement | ListItemElement | LinkElement | Element)[]) => {
  return children.map((child, index) => {
    if (child.type === 'text') {
      return <span key={index}>{child.text}</span>;
    }
    return <Rerender key={index} element={child as Element | ListItemElement | LinkElement} />;
  });
};

export const Rerender = ({ element }: RendererProps) => {
  if (element.type === 'list-item') {
    return <li>{renderChildren(element.children)}</li>;
  }

  if (element.type === 'link') {
    return (
      <DescrtipionLink href={element.url}>
        {renderChildren(element.children)}
      </DescrtipionLink>
    );
  }

  switch (element.type) {
    case 'heading':
      return (
        <Heading level={element.level}>
          {renderChildren(element.children)}
        </Heading>
      );
    case 'list':
      return (
        <List format={element.format}>
          {element.children.map((child, index) => (
            <Rerender key={index} element={child} />
          ))}
        </List>
      );
    case 'paragraph':
      return <Paragraph>{renderChildren(element.children)}</Paragraph>;
    default:
      return null;
  }
};
