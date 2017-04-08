class Features {
  private features: Feature[];

  constructor(features: Feature[]) {
    this.features = features;
  }

  public init() {
    for (let feature of this.features) {
      feature.init();
    }
  }
}

interface Feature {
  init(): void,
}

interface Features {
  init(): void,
}

export {
  Features,
}
