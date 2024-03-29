"use client";

import React from "react";
import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function StoreModal() {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and category"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
}
