import React from "react";

import ResourceSkeleton from "../ResourceSkeleton/ResourceSkeleton";

export default function ResourceSkeletonList() {
  return (
    <div className="resource-list">
      {[...Array(20)].map((_, index) => (
        <ResourceSkeleton key={`skeleton${index}`} />
      ))}
    </div>
  );
}
