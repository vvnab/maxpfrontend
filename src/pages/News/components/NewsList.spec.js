import React from 'React'
import { shallow } from 'enzyme'
import NewsList from './NewsList'

describe('NewsList', () => {
  const props = {
    news: [{
      id: 1,
      title: 'title-1',
      text: 'text-1'
    }, {
      id: 2,
      title: 'title-2',
      text: 'text-2'
    }]
  }
  describe('NewsList render', () => {
    const nextProps = {
      ...props
    }
    const newsList = shallow(<NewsList {...nextProps} />);
    it('renders properly', () => {
      expect(newsList).toMatchSnapshot();
    })
    it('ok', () => {
      expect(newsList.find('ol')).toHaveLength(1);
      expect(newsList.find('li')).toHaveLength(nextProps.news.length);
      expect(newsList.find('li > h4')).toHaveLength(nextProps.news.length);
      expect(
        newsList
          .find('li > h4')
          .first()
          .text()
      ).toEqual(nextProps.news[0].title);
      expect(
        newsList
          .find('li > p')
          .first()
          .text()
      ).toEqual(nextProps.news[0].text);
      expect(
        newsList
          .find('strong')
          .text()
      ).toEqual(`всего новостей: ${nextProps.news.length}`);
    })
  })

  describe('NewsList empty', () => {
    const nextProps = {
      ...props,
      news: []
    }
    const newsList = shallow(<NewsList {...nextProps} />);
    it('renders properly', () => {
      expect(newsList).toMatchSnapshot();
    })
    it('ok', () => {
      expect(newsList.find('ol')).toHaveLength(0);
    })
  })
})