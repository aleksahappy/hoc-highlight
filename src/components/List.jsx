import React from 'react';
import Video from './Video';
import Article from './Article';
import upgradeBlock from './upgradeBlock';

const UpgradedVideo = upgradeBlock(Video);
const UpgradedArticle = upgradeBlock(Article);

export default function List(props) {
  return props.list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return (
          <UpgradedVideo key={index} {...item} />
        );

      case 'article':
        return (
          <UpgradedArticle key={index} {...item} />
        );
    }
  });
}
