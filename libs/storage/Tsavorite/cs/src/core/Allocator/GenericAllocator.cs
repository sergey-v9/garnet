﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System.Runtime.CompilerServices;

namespace Tsavorite.core
{
    /// <summary>
    /// Struct wrapper (for inlining) around the fixed-length Blittable allocator.
    /// </summary>
    public struct GenericAllocator<TKey, TValue, TStoreFunctions> : IAllocator<TKey, TValue, TStoreFunctions>
        where TStoreFunctions : IStoreFunctions<TKey, TValue>
    {
        /// <summary>The wrapped class containing all data and most actual functionality. This must be the ONLY field in this structure so its size is sizeof(IntPtr).</summary>
        private readonly GenericAllocatorImpl<TKey, TValue, TStoreFunctions> _this;

        public GenericAllocator(AllocatorSettings settings, TStoreFunctions storeFunctions)
        {
            // Called by TsavoriteKV via allocatorCreator; must pass a wrapperCreator to AllocatorBase
            _this = new(settings, storeFunctions, @this => new GenericAllocator<TKey, TValue, TStoreFunctions>(@this));
        }

        public GenericAllocator(object @this)
        {
            // Called by AllocatorBase via primary ctor wrapperCreator
            _this = (GenericAllocatorImpl<TKey, TValue, TStoreFunctions>)@this;
        }

        /// <inheritdoc/>
        public readonly AllocatorBase<TKey, TValue, TStoreFunctions, TAllocator> GetBase<TAllocator>()
            where TAllocator : IAllocator<TKey, TValue, TStoreFunctions>
            => (AllocatorBase<TKey, TValue, TStoreFunctions, TAllocator>)(object)_this;

        /// <inheritdoc/>
        public readonly bool IsFixedLength => true;

        /// <inheritdoc/>
        public readonly bool HasObjectLog => true;

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly long GetStartLogicalAddress(long page) => _this.GetStartLogicalAddress(page);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly long GetFirstValidLogicalAddress(long page) => _this.GetFirstValidLogicalAddress(page);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly long GetPhysicalAddress(long logicalAddress) => _this.GetPhysicalAddress(logicalAddress);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly ref RecordInfo GetInfo(long physicalAddress) => ref _this.GetInfo(physicalAddress);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly unsafe ref RecordInfo GetInfoRefFromBytePointer(byte* ptr) => ref _this.GetInfoFromBytePointer(ptr);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly ref TKey GetKey(long physicalAddress) => ref _this.GetKey(physicalAddress);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly ref TValue GetValue(long physicalAddress) => ref _this.GetValue(physicalAddress);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly ref TValue GetAndInitializeValue(long physicalAddress, long endPhysicalAddress) => ref GetValue(physicalAddress);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly (int actualSize, int allocatedSize) GetRecordSize(long physicalAddress) => _this.GetRecordSize(physicalAddress);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly (int actualSize, int allocatedSize, int keySize) GetRMWCopyDestinationRecordSize<TInput, TVariableLengthInput>(ref TKey key, ref TInput input, ref TValue value, ref RecordInfo recordInfo, TVariableLengthInput varlenInput)
            where TVariableLengthInput : IVariableLengthInput<TValue, TInput>
             => _this.GetRMWCopyDestinationRecordSize(ref key, ref input, ref value, ref recordInfo, varlenInput);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly int GetRequiredRecordSize(long physicalAddress, int availableBytes) => GetAverageRecordSize();

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly int GetAverageRecordSize() => _this.GetAverageRecordSize();

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly int GetFixedRecordSize() => _this.GetFixedRecordSize();

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly (int actualSize, int allocatedSize, int keySize) GetRMWInitialRecordSize<TInput, TSessionFunctionsWrapper>(ref TKey key, ref TInput input, TSessionFunctionsWrapper sessionFunctions)
            where TSessionFunctionsWrapper : IVariableLengthInput<TValue, TInput>
            => _this.GetRMWInitialRecordSize(ref key, ref input, sessionFunctions);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly (int actualSize, int allocatedSize, int keySize) GetUpsertRecordSize<TInput, TSessionFunctionsWrapper>(ref TKey key, ref TValue value, ref TInput input, TSessionFunctionsWrapper sessionFunctions)
            where TSessionFunctionsWrapper : IVariableLengthInput<TValue, TInput>
            => _this.GetUpsertRecordSize(ref key, ref value, ref input, sessionFunctions);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly (int actualSize, int allocatedSize, int keySize) GetRecordSize(ref TKey key, ref TValue value) => _this.GetRecordSize(ref key, ref value);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly int GetValueLength(ref TValue value) => _this.GetValueLength(ref value);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly unsafe bool RetrievedFullRecord(byte* record, ref AsyncIOContext<TKey, TValue> ctx) => _this.RetrievedFullRecord(record, ref ctx);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly void AllocatePage(int pageIndex) => _this.AllocatePage(pageIndex);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly bool IsAllocated(int pageIndex) => _this.IsAllocated(pageIndex);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly unsafe void PopulatePage(byte* src, int required_bytes, long destinationPageIndex) => _this.PopulatePage(src, required_bytes, destinationPageIndex);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly void MarkPage(long logicalAddress, long version) => _this.MarkPage(logicalAddress, version);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly void MarkPageAtomic(long logicalAddress, long version) => _this.MarkPageAtomic(logicalAddress, version);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly void ClearPage(long page, int offset = 0) => _this.ClearPage(page, offset);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly void FreePage(long pageIndex) => _this.FreePage(pageIndex);

        /// <inheritdoc/>
        public readonly ref TKey GetContextRecordKey(ref AsyncIOContext<TKey, TValue> ctx) => ref ctx.key;

        /// <inheritdoc/>
        public readonly ref TValue GetContextRecordValue(ref AsyncIOContext<TKey, TValue> ctx) => ref ctx.value;

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly IHeapContainer<TKey> GetKeyContainer(ref TKey key) => new StandardHeapContainer<TKey>(ref key);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly IHeapContainer<TValue> GetValueContainer(ref TValue value) => new StandardHeapContainer<TValue>(ref value);

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly long[] GetSegmentOffsets() => _this.GetSegmentOffsets();

        /// <inheritdoc/>
        public readonly int OverflowPageCount => _this.OverflowPageCount;

        /// <inheritdoc/>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public readonly void SerializeKey(ref TKey key, long physicalAddress) => _this.SerializeKey(ref key, physicalAddress);
    }
}