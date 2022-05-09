import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import { Card } from 'ui';

const videos = [
    {
        id: 1,
        poster: 'http://via.placeholder.com/640x360',
        title: 'Зеленая миля',
        duration: '189 мин.'
    },
    {
        id: 2,
        poster: 'http://via.placeholder.com/640x360',
        title: 'Побег из Шоушенка',
        duration: '142 мин.'
    },
    {
        id: 3,
        poster: 'http://via.placeholder.com/640x360',
        title: 'Список Шиндлера',
        duration: '195 мин.'
    },
    {
        id: 4,
        poster: 'http://via.placeholder.com/640x360',
        title: 'Властелин колец: Возвращение короля',
        duration: '201 мин.'
    }
]

const NextVideos: FC = () => {
    return (
        <section>
            <h3 className="visually-hidden">List of the next videos</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {videos.map(video => (
                    <SwiperSlide key={video.id}>
                        <Card
                            poster={video.poster}
                            title={video.title}
                            duration={video.duration}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default NextVideos;