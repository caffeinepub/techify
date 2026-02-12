import Array "mo:core/Array";
import Time "mo:core/Time";
import List "mo:core/List";



actor {
  type MappingInfo = {
    walletId : Text;
    swapId : Text;
    timestamp : Time.Time;
  };

  let mappingInfoList = List.empty<MappingInfo>();

  public shared ({ caller }) func addMappingInfo(walletId : Text, swapId : Text) : async () {
    let newMappingInfo = {
      walletId;
      swapId;
      timestamp = Time.now();
    };
    mappingInfoList.add(newMappingInfo);
  };

  public shared ({ caller }) func deleteMappingInfoByTimeRange(startTimestamp : Time.Time, endTimestamp : Time.Time) : async () {
    let filteredList = mappingInfoList.filter(
      func(mappingInfo) {
        mappingInfo.timestamp < startTimestamp or mappingInfo.timestamp > endTimestamp
      }
    );
    mappingInfoList.clear();
    mappingInfoList.addAll(filteredList.values());
  };

  public query ({ caller }) func getFirstMappingInfo() : async ?MappingInfo {
    mappingInfoList.first();
  };

  public query ({ caller }) func getAllMappingInfo() : async [MappingInfo] {
    mappingInfoList.toArray();
  };
};
