package Repository;


import Entity.Media;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepository extends JpaRepository<Media, Integer> {
}
