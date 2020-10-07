import React, { useState, useEffect } from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";
import { Link } from "gatsby";
import { slugify } from "../../utils/utilityFunctions";

const SORTS = {
  COUNT: "count",
  NAME: "name",
};
const GlobalTags = ({ data }) => {
  const [tags, setTags] = useState([]);
  const [sortBy, setSortBy] = useState(SORTS.COUNT);

  useEffect(() => {
    const uniquetags = findUniqueTags(data);
    setTags(sortTags(uniquetags));
  }, [data.length]);

  const setAndSortTags = (sortBy) => {
    setSortBy(sortBy);
    setTags(sortTags(tags, sortBy));
  };

  return (
    <div>
      <h3>Community Tags </h3>
      <div className="cardTags">
        <ButtonGroup>
          <Button
            size="sm"
            color="primary"
            active={sortBy === SORTS.NAME}
            onClick={() => setAndSortTags(SORTS.NAME)}
          >
            Sort by Name
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={() => setAndSortTags(SORTS.COUNT)}
            active={sortBy === SORTS.COUNT}
          >
            Sort by Count
          </Button>
        </ButtonGroup>
        <br />
        <br />
        <br />
        <ul className="postTags">
          {tags.map(({ name, count }) => (
            <li key={name}>
              <Link to={`/tag/${slugify(name)}`} tabIndex={0}>
                <Badge color="info">
                  {name} ({count})
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GlobalTags;

const findUniqueTags = (data) => {
  const tags = {};
  data.forEach((item) => {
    const _tags = item.node.frontmatter.tags;
    _tags.forEach((tag) => {
      if (!tags[tag]) {
        tags[tag] = { count: 1 };
      } else {
        const count = tags[tag].count + 1;
        tags[tag] = { count: count };
      }
    });
  });
  const tagsArr = [];

  Object.keys(tags).forEach((tag) => {
    tagsArr.push({ name: tag, count: tags[tag].count });
  });
  return tagsArr;
};

const sortTags = (data, sortBy) => {
  if (!sortBy) {
    sortBy = SORTS.COUNT;
  }
  let sorted = data.sort((a, b) => {
    if (sortBy === SORTS.COUNT) {
      return a.count < b.count ? 1 : -1;
    } else {
      return b.name < a.name ? 1 : -1;
    }
  });
  return sorted;
};
