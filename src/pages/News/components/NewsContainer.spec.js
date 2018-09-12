import React from 'React'
import { shallow } from 'enzyme'
import { NewsContainer } from './NewsContainer'

describe('NewsContainer', () => {
  const props = {
    payload: [],
    error: null,
    newsGet: () => {
    }
  }

  describe('init', () => {
    const mockNewsGet = jest.fn();

    const nextProps = {
      ...props,
      newsGet: mockNewsGet
    }
    const newsContainer = shallow(<NewsContainer {...nextProps} />);

    it('ok', () => {
      expect(mockNewsGet).toHaveBeenCalledTimes(1)
    })

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot();
    })
  })


  describe('Ok', () => {
    const nextProps = {
      ...props,
      payload: [1, 2]
    }
    const newsContainer = shallow(<NewsContainer {...nextProps} />);

    it('NewsList ok', () => {
      expect(newsContainer.find('NewsList')).toHaveLength(1);
      expect(newsContainer.find('Message')).toHaveLength(0);
    })

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot();
    })
  })

  describe('error', () => {
    const nextProps = {
      ...props,
      error: true,
      payload: "Error"
    }
    const newsContainer = shallow(<NewsContainer {...nextProps} />);

    it('Message error', () => {
      expect(newsContainer.find('NewsList')).toHaveLength(0);
      expect(newsContainer.find('Message')).toHaveLength(1);
    })

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot();
    })
  })
})